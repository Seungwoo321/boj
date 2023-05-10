#!/bin/bash

# 실행할 파일명
FILENAME=$1

# 시간 제한 (초)
TIME_LIMIT=$2

# 메모리 제한 (바이트 단위)
MEM_LIMIT=$(($3 * 1024 * 1024))

echo "[$(date +"%Y-%m-%d %T")] Start executing $FILENAME (Memory limit: $2MB, Time limit: $TIME_LIMIT s)"

# 실행 시간 제한 설정
( timeout --preserve-status --kill-after=5 $TIME_LIMIT node $FILENAME > stdout.txt 2> stderr.txt ) & pid=$!

wait $pid 2> /dev/null
result=$?

# Check memory usage and print appropriate message
MEM_USED=$(node -e "console.log(process.memoryUsage().heapUsed);")

# Check exit code and print appropriate message
if [ $result -eq 0 ]
then
    echo "[$(date +"%Y-%m-%d %T")] Done executing $FILENAME"
    cat stdout.txt
elif [ $result -eq 124 ] || [ $result -eq 143 ]
then
    echo "[$(date +"%Y-%m-%d %T")] Execution of $FILENAME has timed out"
elif [ $MEM_USED -gt $MEM_LIMIT ] || grep -q "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed" stderr.txt
then
    echo "[$(date +"%Y-%m-%d %T")] Execution of $FILENAME has exceeded memory limit of $2MB"
else
    echo "[$(date +"%Y-%m-%d %T")] Execution of $FILENAME has resulted in an error"
    cat stderr.txt
fi
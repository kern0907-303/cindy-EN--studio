#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

# 啟動本地輕量伺服器並自動在預設瀏覽器中開啟
python3 -m http.server 8080 &
SERVER_PID=$!

sleep 1
open "http://localhost:8080"

echo "=================================================="
echo " 白雲屋英文共學工作台已啟動！"
echo " 瀏覽器網址：http://localhost:8080"
echo " 關閉此視窗即可停止服務。"
echo "=================================================="

wait $SERVER_PID

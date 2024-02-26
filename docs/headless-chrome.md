# https://developer.chrome.com/blog/headless-chrome
# https://developer.chrome.com/docs/chromium/new-headless

alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"

# Starting Headless (CLI)
chrome --headless --disable-gpu --remote-debugging-port=9222 https://www.chromestatus.com

# Printing the DOM
chrome --headless --disable-gpu --dump-dom https://www.chromestatus.com/

# Create a PDF
chrome --headless --disable-gpu --print-to-pdf https://www.chromestatus.com/

# Taking screenshots
chrome --headless --disable-gpu --screenshot https://www.chromestatus.com/
chrome --headless --disable-gpu --screenshot --window-size=1280,1696 https://www.chromestatus.com/
chrome --headless --disable-gpu --screenshot --window-size=412,732 https://www.chromestatus.com/

# REPL mode (read-eval-print loop) ?????
chrome --headless --disable-gpu --repl --crash-dumps-dir=./tmp https://www.chromestatus.com/

# Debugging Chrome without a browser UI?

# Using programmatically (Node)


We're excited to announce that the new Headless mode is now available in Chrome 112! In this mode, Chrome creates but doesn't display any platform windows. All other functionality, existing and future, is available with no limitations.


import time

class RateLimiter:
    def __init__(self, delay=1):
        self.delay = delay

    def wait(self):
        time.sleep(self.delay)
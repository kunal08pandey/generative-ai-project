from .base import BaseLLM

class GPTClient(BaseLLM):
    def __init__(self, api_key: str):
        self.api_key = api_key

    def generate(self, prompt: str) -> str:
        # Placeholder for OpenAI call
        return f"[GPT RESPONSE]: {prompt}"
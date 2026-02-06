from base import BaseLLM

class ClaudeClient(BaseLLM):
    def __init__(self, apikey:str):
        self.apikey = apikey
        self.model = "claude-2"
        self.base_url = "https://api.anthropic.com/v1/complete"

    def generate(self, prompt: str) -> str:
        # Placeholder for Claude call
        return f"[CLAUDE RESPONSE]: {prompt}"

        
    
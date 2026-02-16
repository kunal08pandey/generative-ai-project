import requests
from .base import BaseLLM

class OllamaClient(BaseLLM):
    def generate(self, prompt) -> str:
        res = requests.post(
            "http://host.docker.internal:11434/api/generate",
                             json= {
                                 "model": "llama3",
                                 "prompt": prompt,
                                 "stream": False
                                 }
        )
        return res.json()["response"]
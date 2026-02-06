from src.llm.gpt_client import GPTClient

client = GPTClient(api_key="dummy-key")
response = client.generate("Hello AI")
print(response)
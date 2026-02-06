# Generative AI Project Structure

A scalable and maintainable template for building Generative AI applications.

## Features
- Modular LLM clients
- Prompt engineering layer
- Caching & rate limiting
- Notebook experimentation

## Run Example
```bash
python examples/basic_completion.py
```

---

## 9️⃣ Final Project Tree (Matches Screenshot ✔)

```text
generative_ai_project/
├── config/
├── src/
│   ├── api/
│   │   ├── routes/
│   ├── llm/
│   ├── llm/
│   ├── rag/
│   ├── prompt_engineering/
│   ├── utils/
│   └── handlers/
├── data/
├── examples/
├── notebooks/
├── tests/
├── requirements.txt
├── setup.py
├── README.md
└── Dockerfile

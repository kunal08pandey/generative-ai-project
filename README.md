# Generative AI Project Structure

A scalable and maintainable template for building Generative AI applications.

## 1. What Kind of Project Is This?

This is a Production-ready Generative AI Backend Platform.

It is designed to:
- Expose LLM capabilities via REST APIs
- Support multiple AI models (GPT, Claude, future models)
- Implement Retrieval Augmented Generation (RAG)
- Be scalable, testable, and deployable

This is NOT a demo script.
This is the same architecture used in real AI products.

## 2. What Problem Does This Project Solve?

Large Language Models (LLMs) like GPT or Claude:

- Do not remember your data
- Are stateless
- Cannot access your private documents by default

This project solves that by:
- Adding REST APIs (FastAPI)
- Adding RAG (Vector DB + embeddings)
- Separating model logic, prompt logic, retrieval logic
- Making everything modular & replaceable

```
Client (Browser / App / Mobile)
     ↓
FastAPI REST API
     ↓
RAG Layer (FAISS / Chroma)
     ↓
LLM Layer (GPT / Claude)
     ↓
Response
```

## 4. Technology Stack (Why Each Is Used)

| Technology | Why |
| :--- | :--- |
| **FastAPI** | Fast, async, auto docs (Swagger) |
| **Uvicorn** | ASGI server to run FastAPI |
| **OpenAI / Claude SDK** | LLM access |
| **Sentence Transformers** | Text → Embeddings |
| **FAISS / Chroma** | Vector search |
| **Pytest** | Unit testing |
| **Docker** | Deployment consistency |
| **GitHub Actions** | CI/CD |


Follow industry-grade backend architecture

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

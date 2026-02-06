FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requreiments.txt

COPY . .

CMD [ "python", "examples/basic_completion.py" ]

CMD ["uvicorn", "src.api.main:app", "--host", "0.0.0.0", "--port", "8000"]

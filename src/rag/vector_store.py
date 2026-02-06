import chromadb

client = chromadb.Client()
collection = client.get_or_create_collection(name="documents")

def add_documents(texts: list[str]):
    for i, doc in enumerate(texts):
        collection.add(
            documents=[doc],
            ids=[str(i)]
        )
    
    embeddings = embed(texts)
    ids = [f"doc_{i}" for i in range(len(texts))]
    
    collection.add(
        documents=texts,
        embeddings=embeddings,
        metadatas=metadata or [{}] * len(texts),
        ids=ids
    )

def search(query: str):
    results = collection.query(
        query_text=[query],
        n_results=3
    )
    return results

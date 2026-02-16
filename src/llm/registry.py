class ModelRegistry:
    _models = {
        "ollama": ["llama3", "mistral", "phi3"],
        "openai": ["gpt-3.5-turbo", "gpt-4", "gpt-4-turbo"],
        "anthropic": ["claude-3-haiku", "claude-3-sonnet", "claude-3-opus"]
    }
    
    @classmethod
    def get_models(cls, provider=None):
        """Get available models for a specific provider or all providers"""
        if provider:
            return cls._models.get(provider, [])
        return cls._models
    
    @classmethod
    def get_all_models(cls):
        """Get a flat list of all available models"""
        all_models = []
        for models in cls._models.items():
            all_models.extend(models)
        return all_models
    
    @classmethod
    def get_providers(cls):
        """Get list of available providers"""
        return list(cls._models.keys())
    
    @classmethod
    def is_model_available(cls, model_name):
        """Check if a specific model is available"""
        for models in cls._models.values():
            if model_name in models:
                return True
        return False
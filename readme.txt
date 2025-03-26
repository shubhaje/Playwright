
ctraye virtual envt -python -m venv venv
activate  - venv\Scripts\activate
Install the Pytest plugin:pip install pytest-playwright
Install the required browsers: playwright install

parallel run : pytest --numprocesses 2
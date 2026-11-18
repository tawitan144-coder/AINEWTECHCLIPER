# Menggunakan base image resmi Python
FROM python:3.10-slim

# Menentukan folder kerja di dalam container
WORKDIR /app

# Menyalin file daftar pustaka ke dalam container
COPY requirements.txt .

# Menginstal semua kebutuhan backend
RUN pip install --no-cache-dir -r requirements.txt

# Menyalin seluruh kode backend ke dalam container
COPY . .

# Membuka port server FastAPI
EXPOSE 8000

# Perintah untuk menjalankan server backend saat container aktif
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

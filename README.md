Here's an updated `README.md` file for your Verve e-commerce project that combines Next.js on the frontend with Django and PostgreSQL on the backend:

---

# Verve - Exclusive Apple Products E-Commerce Store

This is a full-stack e-commerce project named **Verve** exclusively focused on selling Apple products. The frontend is built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The backend is powered by Django and PostgreSQL.

## Getting Started

### Prerequisites

Make sure you have the following installed on your development environment:

- Node.js
- npm, yarn, pnpm, or bun
- Python
- PostgreSQL

### Frontend (Next.js)

First, navigate to the frontend directory and run the development server:

```bash
cd frontend
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Backend (Django)

Navigate to the backend directory, set up a virtual environment, and install the dependencies:

```bash
cd backend
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt
```

Run the Django development server:

```bash
python manage.py runserver
```

Your Django backend will be running on [http://localhost:8000](http://localhost:8000).

### Database (PostgreSQL)

Make sure PostgreSQL is installed and running. You can create a database for the project and configure the connection in your Django `settings.py` file.

```sql
CREATE DATABASE verve;
CREATE USER verveuser WITH PASSWORD 'yourpassword';
ALTER ROLE verveuser SET client_encoding TO 'utf8';
ALTER ROLE verveuser SET default_transaction_isolation TO 'read committed';
ALTER ROLE verveuser SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE verve TO verveuser;
```

Run Django migrations to set up the database schema:

```bash
python manage.py migrate
```

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Django Documentation](https://docs.djangoproject.com/en/stable/) - learn about Django features and API.
- [PostgreSQL Documentation](https://www.postgresql.org/docs/) - learn about PostgreSQL features and usage.


![Untitled design (1)](https://github.com/user-attachments/assets/aba5df5a-ec7b-4349-9433-fa890b5572be)


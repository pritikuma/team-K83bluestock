# IPO Frontend – Team K83 Bluestock

This is the frontend of the IPO Web Application. It displays IPO-related information to the public, including key details like price band, opening and closing dates, listing gain, CMP, and downloadable PDFs.

## 🚀 Features

- Displays real-time IPO information
- Clean, responsive UI
- Fetches data from Django REST API
- Downloadable RHP & DRHP PDFs
- Listing gain and current return indicators

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **HTTP Client:** Axios or Fetch API
- **Styling:** CSS / TailwindCSS / Bootstrap (based on team choice)
- **API Integration:** Django REST Framework backend

## 💻 Running the Project

1. **Clone the repository**
   ```bash
   git clone <frontend-repo-url>
   cd ipo-frontend
## install dependencies   
   - npm install
## Start the development server
  -npm start
##

# IPO Backend – Team K83 Bluestock

This is the backend system for the IPO Web Application built using Django and Django REST Framework. It serves IPO-related data through RESTful APIs and is designed to be integrated into the Bluestock website/app as well as client apps.

## 🚀 Features

- Company Logo
- Company Name
- Price Band
- Open Date & Close Date
- Issue Size & Issue Type
- Listing Date & Status
- IPO Price, Listing Price, Listing Gain
- Current Market Price (CMP) & Current Return
- Downloadable RHP and DRHP PDFs

## 🛠️ Tech Stack(for Backend)

- **Language:** Python 3.12.3
- **Framework:** Django 5.0.6
- **API:** Django REST Framework 3.15.1
- **Database:** SQLite (default, can be switched to PostgreSQL/MySQL)
- **Tools:** Git, GitHub, Postman (for API testing)

## 📁 Folder Structure(Backend)

ipo-backend/

-ipo/ # IPO app (models, views, serializers, etc.)
- ipo_project/ # Django project settings
- manage.py # Django management script
- db.sqlite3 # SQLite database file
- requirements.txt # Python dependencies

## ⚙️ Setup Instructions(Backend)

1. **Clone the repo**:
  
 - git clone https://github.com/pritikuma/team-K83bluestock.git
 - cd team-K83bluestock/ipo-backend
 -python -m venv venv
 -venv\Scripts\activate      On Windows
 -source venv/bin/activate   On macOS/Linux
 -pip install -r requirements.txt
 -python manage.py migrate
 -python manage.py createsuperuser
 -python manage.py runserver
 -Access Admin Panel:
 -Open your browser and go to http://127.0.0.1:8000/admin

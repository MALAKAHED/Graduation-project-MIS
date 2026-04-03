# 📦 Procurement Management System (Backend)

This is the **Backend** implementation of a Procurement Management System, designed to streamline purchasing workflows, approvals, and invoicing between departments and suppliers.

---

## 🚀 Core Features

* **User Management (RBAC):** Integrated Role-Based Access Control for (Admin, Requesting Officer, and Finance/Accountant).
* **Full Procurement Cycle:**
    * **Supplier Management:** Complete database for vendor information and contacts.
    * **Product Catalog:** Managed list of items with real-time pricing and supplier linking.
    * **Purchase Orders (PO):** Digital creation and tracking of orders with status management (Pending/Approved).
* **Financial Integration:** Automated **Invoice** generation linked to approved Purchase Orders for payment tracking.
* **RESTful API:** Clean JSON endpoints for seamless integration with any Frontend (Web or Mobile).

---

## 🛠 Tech Stack

* **Language:** Python 3.12
* **Framework:** Django 6.0
* **API Toolkit:** Django REST Framework (DRF)
* **Database:** SQLite (Development)

---

## 📂 API Endpoints Map

| Endpoint | Description |
| :--- | :--- |
| `/admin/` | Management Dashboard (Manual data entry & control) |
| `/api/suppliers/` | Vendor management & contact lists |
| `/api/products/` | Inventory items & supplier-product mapping |
| `/api/orders/` | Purchase Order lifecycle & status updates |
| `/api/invoices/` | Financial billing & payment status |

---

## ⚙️ Quick Setup & Installation

### 1. Activate Virtual Environment
```bash
# For Linux/WSL
source venv/bin/activate  

# For Windows
.\venv\Scripts\activate

### 2. Install Dependencies

pip install -r requirements.txt

### 3. Apply Database Migrations

python manage.py makemigrations core
python manage.py migrate

### 4. Run Development Server

python manage.py runserver



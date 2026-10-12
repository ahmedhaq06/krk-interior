# KRK Interior - Website Documentation

A modern, responsive, and minimalist website created for **KRK Interior**, an architecture and interior design studio based in Nerul, Navi Mumbai.

---

## 🌟 Highlights & Features

- **Clean Aesthetic & Balanced Whitespace**: Designed with architectural warmth, elegant typography (Cinzel & Playfair Display for headings, Plus Jakarta Sans for crisp readability), and balanced negative space.
- **Accurate Contact & Map Integration**:
  - **Address**: Upper 1st Floor, Haware's Centurion, F01 -A81, Plot No 88-91, Sector 19A Nerul Rd, East, Navi Mumbai, Maharashtra 400706
  - **Phone**: [07498941215](tel:07498941215) (one-touch dial on mobile)
  - **WhatsApp Direct**: Direct chat link with pre-filled inquiry text
  - **Google Maps**: Direct link to the exact business location: [https://maps.app.goo.gl/XkByS2iQZCWLKpoRA](https://maps.app.goo.gl/XkByS2iQZCWLKpoRA)
- **Photo Placeholder Slots**:
  - Clean, minimalist slots designed for the Hero spotlight and 6 portfolio cards (Living Rooms, Modular Kitchens, Master Suites, Commercial Offices, Dining, Showrooms).
- **Consultation Form**: Clean booking inquiry form with instant confirmation feedback.

---

## 📁 File Structure

```text
KRK Interior/
├── index.html        # Main HTML structure with designated image slots
├── style.css         # Minimalist luxury interior styling & responsiveness
├── script.js         # Navigation, smooth scroll, active states & form handlers
└── README.md         # Documentation & guide
```

---

## 🖼️ How to Add Project Photos

When you receive the project photos:

1. Create an `images/` folder inside this directory and paste the photos there (e.g. `images/project-1.jpg`).
2. Open `index.html` and replace the `.portfolio-placeholder-box` or `.hero-card-frame` content with your `<img>` tag:
   ```html
   <img src="images/project-1.jpg" alt="Living Room Interior" style="width:100%; height:100%; object-fit:cover;">
   ```

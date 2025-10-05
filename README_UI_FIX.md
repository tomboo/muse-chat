# Muse Chat – v1.2.1 UI Visual Fix

This version fixes visual issues from v1.2.0:

## ✅ Fixes

1. **Button contrast** – Debug and header buttons now have clear text in both light and dark modes.  
2. **User message visibility** – User bubbles now have readable text in both themes.

## 🧪 Test Plan

1. Switch to dark mode → Debug Panel and ⚙️ button remain readable.  
2. Send a message → User and bot text visible in both themes.  
3. Confirm settings persist as before.

## 📁 Files Updated

- `src/App.tsx` – adjusted Tailwind color classes for visibility.

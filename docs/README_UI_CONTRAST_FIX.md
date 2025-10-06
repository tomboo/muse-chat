# Muse Chat – v1.2.2 UI Contrast Fix

Improves text contrast and readability in the Debug Panel and header buttons.

## ✅ Fixes

1. **Button text contrast** – Readable on both white and dark gray backgrounds in all themes.  
2. **Hover styling** – Added `hover:bg-gray-100` for better affordance in light mode.

## 🧪 Test Plan

1. Toggle between light and dark mode.  
2. Expand Debug Panel – all button text should be clearly visible.  
3. Confirm user and bot message bubbles remain readable.

## 📁 Files Updated

- `src/App.tsx` – button color classes corrected for consistent visibility.

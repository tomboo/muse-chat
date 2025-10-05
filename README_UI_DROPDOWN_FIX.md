# Muse Chat – v1.2.3 UI Dropdown Contrast Fix

This update ensures all dropdowns (Theme, Storage, AI Model) are fully readable in both light and dark modes.

## ✅ Fixes

1. Dropdown text now **dark on white** in light mode, and **white on dark gray** in dark mode.
2. Uniform styling across all three selectors for consistent appearance.

## 🧪 Test Plan

1. Switch between light and dark mode.  
2. Open Debug Panel → verify all dropdowns have clearly visible text.  
3. Select various options and confirm persistence.  

## 📁 Files Updated

- `src/components/ThemeSelector.tsx`  
- `src/components/StorageSelector.tsx`  
- `src/components/AiModelSelector.tsx`

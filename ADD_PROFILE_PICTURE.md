# How to Add Your Profile Picture

## Steps:

1. **Save your profile picture** to the `public` folder in the project directory.

2. **Name the file exactly**: `profile-picture.jpg`
   - Full path: `/Users/sagarjangra/Fiver/Portfolio/public/profile-picture.jpg`

3. **Recommended image specifications:**
   - **Format**: JPG, PNG, or WebP
   - **Size**: At least 512x512 pixels (square format works best)
   - **File size**: Keep under 500KB for fast loading
   - **Aspect ratio**: 1:1 (square) is recommended

4. **After saving the image:**
   - The portfolio will automatically display your picture in the Hero section
   - No code changes needed - just refresh your browser!

## Alternative Names:

If you name your image differently, update the path in:
- File: `components/sections/Hero.tsx`
- Line ~41: Change `src="/profile-picture.jpg"` to your filename

## Tips:

- Use a professional, well-lit photo
- Make sure your face is clearly visible
- Good lighting and clean background work best
- The image will be displayed in a circular frame, so center your face

---

**Your portfolio is ready! Just add your photo and you're all set! 🚀**


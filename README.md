# Great Iniobong — Virtual Assistant Portfolio

A warm, responsive, production-ready portfolio website for **Great Iniobong**, Virtual Assistant based in Ibadan, Nigeria, specializing in admin support, calendar & inbox management, data entry, and customer replies.

Built with **React 19**, **TypeScript**, **Vite**, **React Router**, and **Tailwind CSS**.

---

## Quick Start & Running Locally

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) in your browser.
5. Build for production:
   ```bash
   npm run build
   ```

---

## 1. How to Edit All Site Content

All text, links, sample data, services, contact email, and profile copy live in a single centralized file:
👉 `src/content.ts`

- **Client Profile & Bio**: Edit `CLIENT_PROFILE` (name, tagline, location, bio, honest positioning statement).
- **Services**: Edit `SERVICES` array to add or modify capabilities and deliverables.
- **How I Work Steps**: Edit `HOW_I_WORK` array.
- **Tools List**: Edit `TOOLS` array.
- **Sample Projects**: Edit `SAMPLE_PROJECTS` array, `SAMPLE_EMAILS`, `CALENDAR_WEEK_SCHEDULE`, `RAW_CONTACTS_DATA`, `SUPPORT_TEMPLATES`, and `RESEARCH_BRIEF_DATA`.

---

## 2. How to Set Your WhatsApp Number

In `src/content.ts`, locate the `CLIENT_PROFILE` constant:

```typescript
export const CLIENT_PROFILE: ClientProfile = {
  // ...
  whatsappNumber: "2349068809134",
  whatsappMessage: "Hi Great, I found your portfolio and I'd like to talk about some help.",
  // ...
};
```

**Format rules:**
- Include your country code without the `+` sign and without spaces or hyphens.
- For Nigeria (+234), if your phone number is `0812 345 6789`, replace `0` with `234`, resulting in `2348123456789`.
- The floating WhatsApp button and hero WhatsApp buttons will immediately update to direct potential clients to chat with you.

---

## 3. How to Set Up the Web3Forms Contact Form Key

The contact form is wired to [Web3Forms](https://web3forms.com) so messages land directly in your email inbox without needing a backend server.

1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter your email address (`Iniobonggreat51@gmail.com`) to generate a free Access Key.
3. Check your email for your Access Key.
4. Create a `.env` file in the root directory (or edit your deployment platform's environment variables):
   ```env
   VITE_WEB3FORMS_KEY="your-access-key-here"
   ```
5. *Note*: In preview/development mode without an API key, the form gracefully simulates successful submissions so testers can test the flow without errors.

---

## 4. How to Add Your Animation to the Hero

The hero includes an `AnimationSlot` component configured in `src/content.ts`:

```typescript
export const HERO_ANIMATION: AnimationConfig = {
  type: 'placeholder', // 'placeholder' | 'video' | 'image'
  src: '',
  poster: '',
  alt: 'Warm animated illustration demonstrating organized virtual assistant workflow',
};
```

### Options:
- **Animated SVG (Default configured)**:
  1. Set `type: 'svg'` and `src: '/inbox-intro.svg'`.
  2. Loaded via an `<img>` tag with reserved 640:420 aspect ratio to prevent layout shifting.
  3. Triggers playback once the hero enters the viewport using a cache-busting timestamp query (`?t=<timestamp>`), ensuring it starts at frame zero.
  4. Features a small "Replay" button beneath the animation to restart playback anytime.
- **Default Placeholder**: Set `type: 'placeholder'`. It displays a soft organic blob illustration with a daily dispatch task card.
- **Video (.mp4 or .webm)**:
  1. Drop your video file into the `/public` folder (e.g. `/public/great-va-animation.mp4`).
  2. Set `type: 'video'` and `src: '/great-va-animation.mp4'`.
  3. (Optional) Provide a static poster frame in `poster: '/great-va-poster.jpg'` for users with `prefers-reduced-motion` enabled.
  4. The video will autoplay muted, loop, lazy-load, and pause automatically when scrolled off-screen.
- **GIF or WebP**:
  1. Drop your animated GIF or WebP in `/public/great-va.webp`.
  2. Set `type: 'image'` and `src: '/great-va.webp'`.

---

## 5. How to Replace the Resume PDF

1. Prepare your resume in PDF format.
2. Name the file:
   ```
   Great-Iniobong-Resume.pdf
   ```
3. Overwrite the placeholder file located at:
   ```
   /public/Great-Iniobong-Resume.pdf
   ```
4. All "Download resume" buttons across the Header, Hero, and Footer will immediately download your new PDF.

---

## 6. Step-by-Step Deployment

### Deploying to Vercel
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. In **Environment Variables**, add:
   - Key: `VITE_WEB3FORMS_KEY`
   - Value: Your Web3Forms access key
6. Click **Deploy**.
7. *(Optional SPA Rewrite)*: If direct deep links (e.g. `/work/inbox-triage`) show 404 on refresh on Vercel, create a `vercel.json` file in root:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### Deploying to Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your Git provider and pick your repository.
3. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. In **Site configuration > Environment variables**, add:
   - `VITE_WEB3FORMS_KEY`: Your Web3Forms key
5. To support client-side routing on page refreshes, Netlify uses the included `public/_redirects` file:
   ```text
   /*    /index.html   200
   ```
6. Click **Deploy site**.

---

## Design System Tokens
- **Background**: Warm cream (`#FFF8F0`)
- **Primary Accent**: Soft terracotta (`#E07A5F`)
- **Secondary Accent**: Sage green (`#81B29A`)
- **Surfaces**: Warm sand (`#F4E9DC`)
- **Text**: Deep brown (`#3D2C24`)
- **Headings Font**: Fraunces
- **Body Font**: DM Sans
- **WCAG AA Compliance**: High contrast ratios checked for accessibility.

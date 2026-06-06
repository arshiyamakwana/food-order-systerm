# 🚀 Vercel Deployment Guide

This guide will help you deploy both the frontend and backend to Vercel without errors.

## 📋 Prerequisites

- GitHub account (repo already configured)
- Vercel account (free tier is fine)
- Backend deployed on Vercel first (get the URL)
- Environment variables ready

---

## **PART 1: Deploy Backend to Vercel** ✅

### Step 1: Push Backend Code to GitHub

Already done! Your backend is in the `foodi_server/` directory.

### Step 2: Create Vercel Backend Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repo: `food-order-system`
4. Select **Root Directory**: `foodi_server`
5. Click **"Deploy"**

**⚠️ IMPORTANT:** Add Environment Variables BEFORE deploying!

### Step 3: Add Environment Variables (Backend)

In Vercel Dashboard → Select the backend project → Settings → Environment Variables:

```
DB_USER = arshiyamakwana
DB_PASS = LTiDcYiZpIo1KuYD
ACCESS_TOKEN_SECRET = 37d59cd83749f554f4d261a7f3c93e5e51e4bc48d73f693ceba2fb0d60748280
PAYMENT_SECRET_KEY = 37d59cd83749f554f4d261a7f3c93e5e51e4bc48d73f693ceba2fb0d60748280
```

### Step 4: Redeploy

After adding environment variables, redeploy the backend:

- Go to Deployments tab
- Click the three dots on latest deployment
- Select **"Redeploy"**

✅ **Copy your Backend URL** (looks like: `https://food-order-system-backend.vercel.app`)

---

## **PART 2: Deploy Frontend to Vercel** ✅

### Step 1: Update Frontend Environment Variables

The frontend is already configured to use environment variables!

### Step 2: Create Vercel Frontend Project

1. Go to [https://vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repo: `food-order-system`
4. Select **Root Directory**: `foodi_client`

### Step 3: Add Environment Variables (Frontend)

**CRITICAL:** Before clicking Deploy, add these environment variables:

```
VITE_API_URL = https://your-backend-url.vercel.app
VITE_APIKEY = your_firebase_api_key
VITE_AUTHDOMAIN = your_firebase_auth_domain
VITE_PROJECTID = your_firebase_project_id
VITE_STORAGEBUCKET = your_firebase_storage_bucket
VITE_MESSAGINGSENDERID = your_firebase_messaging_sender_id
VITE_APPID = your_firebase_app_id
```

Replace `https://your-backend-url.vercel.app` with the actual backend URL from Step 1!

### Step 4: Deploy

Click **"Deploy"** and wait for the build to complete.

✅ **Your Frontend is Live!** (URL will be shown)

---

## 🧪 Testing Your Deployment

1. Open your frontend URL in browser
2. Try to:
   - Browse the menu ✅
   - Add items to cart ✅
   - Sign up / Login ✅
   - Place an order ✅
   - Access admin dashboard ✅

---

## ⚠️ Common Issues & Fixes

### Issue: 404 Error on Frontend

**Solution:** Make sure `VITE_API_URL` environment variable is set correctly

### Issue: Backend Connection Error

**Solution:**

- Check if backend environment variables are set
- Verify MongoDB connection string is correct
- Redeploy backend after adding env variables

### Issue: CORS Error

**Solution:** Backend CORS is already configured for all Vercel domains ✅

### Issue: Firebase Error

**Solution:** Double-check all Firebase credentials in environment variables

---

## 📱 Project URLs After Deployment

- **Frontend:** `https://your-frontend.vercel.app`
- **Backend API:** `https://your-backend.vercel.app`
- **GitHub:** `https://github.com/arshiyamakwana/food-order-system`

---

## ✅ Deployment Checklist

- [ ] Backend deployed to Vercel
- [ ] Backend environment variables added
- [ ] Backend URL copied
- [ ] Frontend deployed to Vercel
- [ ] Frontend VITE_API_URL set to backend URL
- [ ] Frontend other environment variables added
- [ ] Frontend deployment successful
- [ ] Tested all features

---

**For more help, visit:** [Vercel Documentation](https://vercel.com/docs)

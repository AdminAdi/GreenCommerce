# GreenCommerce Vercel Deployment Guide

This guide provides step-by-step instructions for deploying both the frontend and backend of GreenCommerce to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com/) account
2. Git repository with your code (you have already pushed to GitHub)
3. [Vercel CLI](https://vercel.com/docs/cli) installed (optional for advanced configuration)

## Backend Deployment

### Step 1: Prepare Environment Variables

You'll need to add the following environment variables to your Vercel project:

```
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
MONGODB_URI=your_mongodb_uri
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Output Directory: Leave empty
   - Install Command: `npm install`
5. Add the environment variables from Step 1
6. Click "Deploy"

After deployment, you'll receive a URL like `https://green-commerce-api.vercel.app`. Use this URL for your frontend's backend API endpoint.

## Frontend Deployment

### Step 1: Update Environment Variables

Update the `.env` file in your frontend directory:

```
VITE_BACKEND_URL=https://green-commerce-api.vercel.app
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add environment variables if needed
6. Click "Deploy"

After deployment, you'll get a URL like `https://green-commerce.vercel.app`

## Troubleshooting

### CORS Issues

If you encounter CORS issues:
1. Ensure your backend `vercel.json` file has proper CORS headers
2. Add your frontend URL to the `origin` array in the CORS configuration in `server.js`
3. Redeploy your backend

### Database Connection Issues

If you're having trouble connecting to MongoDB:
1. Ensure your MongoDB Atlas cluster allows connections from anywhere (IP access: 0.0.0.0/0)
2. Verify your connection string has the correct username, password, and database name

### API Routes Not Working

If your API routes aren't working:
1. Check that the `vercel.json` file in the backend directory is correctly set up
2. Ensure your routes in the application match the routes defined in the API

## Vercel CLI Deployment (Alternative)

If you prefer using the CLI:

```bash
# Backend deployment
cd backend
vercel

# Frontend deployment
cd ../frontend
vercel
```

For production deployment:
```bash
vercel --prod
```

## Updating Your Deployment

To update your deployment after making changes:

1. Push changes to your GitHub repository
2. Vercel will automatically redeploy your application
3. Alternatively, use the Vercel CLI to deploy manually:
   ```bash
   vercel --prod
   ``` 
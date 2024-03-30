/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            'images.pexels.com',
            'api.dicebear.com',
            "lh3.googleusercontent.com",
        ],
        dangerouslyAllowSVG : true,
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
      
    }
};

export default nextConfig;

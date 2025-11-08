## Car Dashboard

1. Installation:
   Create a new React project with Vite:

---

```
npm create vite@latest my-dashboard
cd my-dashboard
code .
```

- Choose React and JavaScript (or TypeScript if preferred).

my-dashboard is your project folder name.

## Install Dependencies

---

```
npm install react-router-dom@latest
npm install tailwindcss @tailwindcss/vite
npm install antd @ant-design/icons
npm install recharts

```

2. Configure Tailwind CSS

---

In index.css:

```
@import "tailwindcss";

```

and in vite.config.js file:

```
import tailwindcss from "@tailwindcss/vite"; and call tailwindcss()
```

3. Folder Structure

```
my-dashboard/
├─ node_modules/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ pages/
│  │  │  ├─ Dashboard/Dashboard.jsx
│  │  │  └─ Users/User.jsx
│  │  └─ Layout/Mainlayout.jsx
│  ├─ routes/router.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```

4. In main.js file: Warp the router with Router Provider:

```

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <RouterProvider router={router} />
 </StrictMode>
);
```

5. Routing Setup (router.jsx)

```
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import User from "../components/pages/Users/User";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/users", element: <User /> },
        ]
    }
]);
```

6. For customized the ant design componenets use: " COnfigProvider"

```
 <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "#f5d9a6",
            colorText: "rgb(0,0,0)",
            headerColor: "rgb(107,94,70)",
            headerBg: "rgb(107,94,70)",
            headerHeight: 96,
            bodyBg:"#222222"
          },
          Menu: {
            itemBg: "#f5d9a6",
            itemColor: "#000",
            itemSelectedBg: "#eacb8b",
            itemSelectedColor: "#000",
          },
        },
      }}
    >
    // your content will be here
    </ConfigProvider>
```

7. For Chart:

- create a data and use it in dataSource
  Exp:

```
const userData = [
  { name: "Jan", users: 2400 },
  { name: "Feb", users: 2210 },
.
.
.
  { name: "Dec", users: 5300 },
];

<BarChart
        data={userData} // here it is.
      >
        <Bar dataKey="users" fill="#8884d8" />
      </BarChart>

```

8. Run the Project

```
npm run dev

```

<!-- Redux -->
npm install @reduxjs/toolkit
npm install react-redux
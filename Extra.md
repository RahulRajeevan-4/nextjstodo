I have seen folders like () and [] etc. What does it mean?

Inside the app/ directory, Next.js uses folder names with symbols like (), [], and [[]] to control routing and layouts. Here’s the breakdown:

1. [param] → Dynamic Segments

Square brackets mean dynamic routes.

Example:
```
app/
└── blog/
    └── [slug]/
        └── page.tsx
```

Visiting /blog/hello-world → loads page.tsx with params.slug = "hello-world"

Good for blog posts, user profiles, etc.

2. [[param]] → Optional Dynamic Segments

Double square brackets mean the route is optional.

Example:
```
app/
└── docs/
    └── [[...slug]]/
        └── page.tsx
```

/docs → works (slug is undefined)

/docs/getting-started → works (slug = ["getting-started"])

/docs/guides/advanced → works (slug = ["guides","advanced"])

This is often used for catch-all or optional catch-all routes.

3. (group) → Route Groups

Parentheses mean route grouping.

They don’t affect the URL, only folder organization.

Example:
```
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── register/
│       └── page.tsx
├── (dashboard)/
│   ├── users/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
```

URL becomes /login, /register, /users, /settings

The (auth) and (dashboard) folders don’t show up in the URL, they’re just for grouping.

4. @slot → Parallel Routes (Advanced)

@ is used for parallel routes, which let you render multiple pages side by side in the same layout.

Example:
```
app/
└── dashboard/
    ├── @analytics/
    │   └── page.tsx
    ├── @settings/
    │   └── page.tsx
    └── layout.tsx
```

You could show analytics and settings in tabs inside the same dashboard layout.


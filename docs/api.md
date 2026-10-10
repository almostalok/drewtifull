# Drewtifull REST API Documentation

Base URL: `/api`

All API endpoints return JSON payloads. Cross-Origin Resource Sharing (CORS) and standard HTTP status codes are enforced.

---

## 1. Projects Endpoints

### `GET /api/projects`
Retrieves all projects owned by current user / session.
- **Response `200 OK`**:
```json
{
  "projects": [
    {
      "id": "proj_12345",
      "slug": "riya-birthday-memories",
      "templateId": "soft-garden",
      "recipientName": "Riya",
      "occasion": "birthday",
      "status": "published",
      "views": 42,
      "updatedAt": "2026-10-10T12:00:00.000Z"
    }
  ]
}
```

### `POST /api/projects`
Creates a new project.
- **Request Body**:
```json
{
  "templateId": "soft-garden",
  "recipientName": "Aanchal",
  "occasion": "birthday",
  "relationship": "Best Friend",
  "customMessage": "Happy birthday!"
}
```
- **Response `201 Created`**:
```json
{
  "success": true,
  "project": { ... }
}
```

### `GET /api/projects/:id`
Retrieves a specific project by its ID.
- **Response `200 OK`**: `{ "project": { ... } }`
- **Response `404 Not Found`**: `{ "error": "Project not found" }`

### `PATCH /api/projects/:id`
Updates project content, sections, photos, or theme customizations.
- **Request Body**:
```json
{
  "recipientName": "Updated Name",
  "sections": [ ... ],
  "photos": [ ... ],
  "themeOverride": { ... }
}
```
- **Response `200 OK`**: `{ "success": true, "project": { ... } }`

### `DELETE /api/projects/:id`
Deletes a project and its associated uploaded assets.
- **Response `200 OK`**: `{ "success": true, "deletedId": "proj_12345" }`

### `POST /api/projects/:id/duplicate`
Creates a copy of an existing project with draft status.
- **Response `201 Created`**: `{ "success": true, "project": { ... } }`

---

## 2. Publishing & Slugs

### `POST /api/projects/:id/publish`
Marks the project as published and reserves/confirms its public slug.
- **Response `200 OK`**:
```json
{
  "success": true,
  "publishedUrl": "https://drewtifull.com/p/aanchal-birthday",
  "project": { ... }
}
```

### `POST /api/projects/:id/unpublish`
Reverts the project status back to draft, removing public availability.
- **Response `200 OK`**: `{ "success": true, "project": { ... } }`

### `GET /api/published/:slug`
Fetches a published project by its public slug for microsite rendering.
- **Response `200 OK`**: `{ "project": { ... } }`
- **Response `404 Not Found`**: `{ "error": "Published gift not found or draft" }`

### `GET /api/slugs/:slug/availability`
Checks whether a proposed custom slug is available.
- **Response `200 OK`**:
```json
{
  "slug": "custom-name-birthday",
  "available": true
}
```

---

## 3. Photo Assets Upload

### `POST /api/projects/:id/assets/upload`
Uploads a photo for the project. Validates file size (max 10MB) and MIME type (`image/jpeg`, `image/png`, `image/webp`).
- **Request**: Multipart Form Data with `file` field.
- **Response `201 Created`**:
```json
{
  "success": true,
  "asset": {
    "id": "asset_12345",
    "url": "/uploads/proj_12345/photo_1.jpg",
    "filename": "photo_1.jpg",
    "fileSize": 1048576,
    "mimeType": "image/jpeg"
  }
}
```

### `DELETE /api/projects/:id/assets/:assetId`
Removes an uploaded asset.
- **Response `200 OK`**: `{ "success": true }`

---

## 4. Templates Registry

### `GET /api/templates`
Returns all registered templates, optionally filtered by `?occasion=birthday` or `?aesthetic=soft`.
- **Response `200 OK`**:
```json
{
  "templates": [ ... ]
}
```

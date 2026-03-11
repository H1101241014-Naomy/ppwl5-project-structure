import { UserModel } from "../models/user.model";

export const userView = (users: UserModel[]) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>User List</title>
  <link href="/css/style.css" rel="stylesheet">
</head>

<body class="bg-gray-100 min-h-screen p-10">

<div class="max-w-3xl mx-auto">
  <h1 class="text-3xl font-bold text-blue-600 mb-6">
    User Management (Clean Structure)
  </h1>

  <form method="POST" action="/create" class="mb-6 flex gap-2">
    <input name="name" placeholder="Name" class="border p-2 rounded w-full"/>
    <input name="role" placeholder="Role" class="border p-2 rounded w-full"/>
    <button class="bg-blue-500 text-white px-4 rounded">Add</button>
  </form>

  <div class="grid gap-4">
    ${users.map(user => `
      <div class="bg-white shadow rounded p-4 flex justify-between items-center">
        <div>
          <p class="font-semibold">${user.displayName}</p>
        </div>

        <div class="flex gap-2">
          <form method="POST" action="/delete/${user.id}">
            <button class="bg-red-500 text-white px-3 rounded">Delete</button>
          </form>
        </div>

      </div>
    `).join("")}
  </div>
</div>

</body>
</html>
`;
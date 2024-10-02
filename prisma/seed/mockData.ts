import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c12885c4-1e06-41b9-a896-f0479f3aa3f1', '1Jeff.Thompson20@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'invitationToken2', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e4e7e295-ab2b-4591-98a3-31c408a0f934', '10Chaz.Pollich21@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=12', 'invitationToken4', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('368ddddc-eeea-44e5-8912-5da77f1709f3', '19Gillian56@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=21', 'invitationToken5', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('026000b4-a986-4c6a-8bf9-1128762d29a5', '28Jo.Runte@yahoo.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=30', 'invitationToken1', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('411c8558-0dd9-403f-b957-c34f00d1d31a', '37Narciso_Green59@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=39', 'invitationToken4', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('943c3943-d053-4d3e-bc05-47b58ef3a2e0', '46Kristofer_Nikolaus74@yahoo.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=48', 'invitationToken2', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('7917d768-45e8-40c3-ae83-54969fc316af', '64Caesar.Carroll-Medhurst@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=66', 'invitationToken4', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('07792b33-8115-4694-b481-e97cbaa14b6a', '73Jaqueline_Franecki@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'invitationToken3', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('626b8537-df55-42e9-8afe-255f6a0f7741', '82Pablo.Nader43@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=84', 'invitationToken4', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Admin" ("id", "role", "userId") VALUES ('433015de-4c59-43b6-bcd6-efa74bc3196c', 'Super Admin', '411c8558-0dd9-403f-b957-c34f00d1d31a');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('79568f29-8118-423b-8571-bb15629767f8', 'Event Manager', '626b8537-df55-42e9-8afe-255f6a0f7741');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('3e4b6d87-b290-40b8-97f0-887fd1e769b5', 'Event Manager', 'c12885c4-1e06-41b9-a896-f0479f3aa3f1');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('6261ea65-fcf6-4990-932e-15f0759168d3', 'Event Manager', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('8803ec56-9e89-40e8-a99f-48a9d53182aa', 'User Support', '368ddddc-eeea-44e5-8912-5da77f1709f3');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('0e180338-5dae-4979-97fe-a4af481e0a56', 'Event Manager', '626b8537-df55-42e9-8afe-255f6a0f7741');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('ad25695f-313f-4788-884c-5c200f8cfc42', 'Event Manager', '7917d768-45e8-40c3-ae83-54969fc316af');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('0f5d079c-7018-4c49-83f3-fdf09651df0c', 'Resource Manager', '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('57141611-e4b8-4211-863e-d8c478e3b305', 'Event Manager', '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "Admin" ("id", "role", "userId") VALUES ('d6d53a6f-459e-4c36-9a1a-e276bfd3f9c4', 'Super Admin', '626b8537-df55-42e9-8afe-255f6a0f7741');

INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('2a8d2f4a-cc28-46a7-a2e8-6e63ac11cba5', 'Database Management Essentials', 'Learn how to build modern web applications using React.', 'https://i.imgur.com/YfJQV5z.png?id=113');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('48c1cb5e-2765-465d-a70f-48f34d4191b0', 'Advanced JavaScript Techniques', 'Essential knowledge for managing and maintaining databases.', 'https://i.imgur.com/YfJQV5z.png?id=117');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('f95d6b7a-9194-4177-9e1e-fe22c2631ab0', 'Advanced JavaScript Techniques', 'An overview of machine learning principles and applications.', 'https://i.imgur.com/YfJQV5z.png?id=121');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('107fdf59-33df-48ad-a0b6-aaa2aae6b0ca', 'Web Development with React', 'An overview of machine learning principles and applications.', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('09168eba-ee4a-46ed-a7b6-3c064f91ff07', 'Introduction to Python', 'A comprehensive guide to getting started with Python programming.', 'https://i.imgur.com/YfJQV5z.png?id=129');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('0846d7c9-dced-4e9d-9e14-c11eb7a9d9ca', 'Database Management Essentials', 'Essential knowledge for managing and maintaining databases.', 'https://i.imgur.com/YfJQV5z.png?id=133');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('61c3c41c-617d-4137-9c00-2aef01515b2e', 'Web Development with React', 'Essential knowledge for managing and maintaining databases.', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('c27da107-a84f-46de-8766-617066a1be65', 'Web Development with React', 'A comprehensive guide to getting started with Python programming.', 'https://i.imgur.com/YfJQV5z.png?id=141');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('550e53ba-eea7-4d86-894c-d0894acc25d7', 'Understanding Machine Learning', 'Indepth exploration of advanced JavaScript concepts and techniques.', 'https://i.imgur.com/YfJQV5z.png?id=145');
INSERT INTO "Resource" ("id", "name", "description", "resourceUrl") VALUES ('90314ba5-a8ae-4ec1-878a-b1b5260844cd', 'Introduction to Python', 'Indepth exploration of advanced JavaScript concepts and techniques.', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('580755e3-14c3-402c-a497-42b7d1139ea9', 'Healthcare Innovation Summit', 'An event aimed at helping the local community with various outreach programs.', '2024-01-10T00:21:53.427Z', '2025-05-08T05:30:00.399Z', 'Tech Hub Silicon Valley', 'defendo');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('264b3f51-e7a7-4ef9-90ee-3e2851c05a0f', 'Community Outreach Program', 'A workshop to learn the latest strategies in digital marketing.', '2024-09-02T16:11:59.390Z', '2025-07-22T17:47:27.303Z', 'Tech Hub Silicon Valley', 'exercitationem urbs');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('bffc7244-42b8-4e08-80a8-02803e21f879', 'Healthcare Innovation Summit', 'A workshop to learn the latest strategies in digital marketing.', '2024-07-02T09:54:44.069Z', '2024-06-29T15:35:04.141Z', 'Tech Hub Silicon Valley', 'quo celo');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('7757fc70-9798-4b5a-bdcb-f09e28530e1b', 'Digital Marketing Workshop', 'A workshop to learn the latest strategies in digital marketing.', '2025-03-07T14:25:06.161Z', '2025-02-21T11:05:26.528Z', 'Marketing Arena Los Angeles', 'talus speciosus');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('735c7527-a968-4d0b-a067-3b665aebc695', 'Community Outreach Program', 'A gathering of tech enthusiasts to discuss the latest trends in technology.', '2023-12-12T11:53:04.421Z', '2024-07-07T14:28:07.994Z', 'New York Convention Center', 'substantia quo cubicularis');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('5a160608-6c90-4c78-a674-0741513c746e', 'Summer Coding Bootcamp', 'An event aimed at helping the local community with various outreach programs.', '2024-06-13T23:19:12.464Z', '2024-05-16T19:35:02.263Z', 'Healthcare Institute Boston', 'vir');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('6452e2f6-2fe2-42d5-9e3a-a454b98a7b01', 'Healthcare Innovation Summit', 'An event aimed at helping the local community with various outreach programs.', '2023-12-29T19:40:42.271Z', '2025-07-07T10:48:15.478Z', 'Tech Hub Silicon Valley', 'autem coadunatio');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('e1479a78-b7ac-4a73-8a8b-84aa3bbeb109', 'Digital Marketing Workshop', 'A workshop to learn the latest strategies in digital marketing.', '2025-03-09T16:37:20.906Z', '2024-12-02T19:48:30.256Z', 'Tech Hub Silicon Valley', 'vesper currus');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('1c36ed12-b0ed-4146-8f78-40d270278ec3', 'Summer Coding Bootcamp', 'A summit focused on the latest innovations in the healthcare industry.', '2025-05-10T23:38:15.739Z', '2024-05-26T02:20:54.517Z', 'Marketing Arena Los Angeles', 'acer tandem damno');
INSERT INTO "Event" ("id", "title", "description", "startDate", "endDate", "location", "") VALUES ('a8c08696-0ae5-4f4d-9832-2d22424f9676', 'Community Outreach Program', 'A summit focused on the latest innovations in the healthcare industry.', '2024-03-14T11:33:58.831Z', '2025-01-08T22:29:37.480Z', 'Community Hall Downtown', 'quam');

INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('f799e00c-794e-4613-adb6-b12256ca437a', 'Implement password recovery', 'Integrate a payment gateway for event registrations.', '2024-02-22T00:34:06.623Z', 'On Hold');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('c2396393-d279-4180-8b70-a88f25d0fb30', 'Create event page layout', 'Create a secure password recovery and reset feature.', '2024-12-06T12:15:08.184Z', 'In Progress');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('89f137bd-013b-497f-be4c-27395d6efa09', 'Create event page layout', 'Design the layout and functionality of the event page.', '2025-02-28T01:43:33.814Z', 'Pending');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('a57a0ea8-ed90-46d9-aa2f-2bfd07b72009', 'Set up payment gateway', 'Create a secure password recovery and reset feature.', '2024-05-30T06:01:12.992Z', 'Pending');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('6b1b03e3-0a78-4c71-88cf-d483a317411c', 'Create event page layout', 'Integrate a payment gateway for event registrations.', '2024-06-09T12:56:36.924Z', 'In Progress');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('ead4c178-8a7e-4039-bc72-ce207a16ebef', 'Complete user registration module', 'Design the layout and functionality of the event page.', '2025-05-13T20:41:23.079Z', 'Pending');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('2df0bde8-bdcd-43b3-a12d-e4c5164e2c37', 'Design admin dashboard', 'Design the layout and functionality of the event page.', '2023-10-20T08:01:07.119Z', 'Cancelled');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('f145a39e-2a29-4ab2-b021-9e36126a5696', 'Design admin dashboard', 'Integrate a payment gateway for event registrations.', '2025-02-15T19:26:38.228Z', 'In Progress');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('a8354673-4881-497e-9e51-d607431ab016', 'Implement password recovery', 'Integrate a payment gateway for event registrations.', '2025-09-09T21:48:49.361Z', 'Cancelled');
INSERT INTO "Task" ("id", "title", "description", "dueDate", "status") VALUES ('ac15c649-0d59-49a3-83c6-6b19f63c2444', 'Create event page layout', 'Integrate a payment gateway for event registrations.', '2024-06-18T08:25:58.506Z', 'Completed');

INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('51666690-3c6d-4225-961e-4e07f4dec82e', 'Admin has assigned you a new task Complete the project report.', false, 'e4e7e295-ab2b-4591-98a3-31c408a0f934');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('1f6207e7-f3a2-4170-b50a-857546abebb4', 'Admin has assigned you a new task Complete the project report.', true, '368ddddc-eeea-44e5-8912-5da77f1709f3');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('7fa7350f-7a9f-43b5-8ccd-402c069b405a', 'Reminder Your subscription will expire in 3 days.', true, '626b8537-df55-42e9-8afe-255f6a0f7741');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('1ea90b3b-7122-49dd-8c22-e2d696273834', 'Resource updated Check out the new guidelines document.', false, '411c8558-0dd9-403f-b957-c34f00d1d31a');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('7dc9ecfc-c8ba-4526-9b5c-f7b6056a52e3', 'Admin has assigned you a new task Complete the project report.', true, 'c12885c4-1e06-41b9-a896-f0479f3aa3f1');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('5637eee7-69bb-4698-ab8a-efe3e2be871f', 'Reminder Your subscription will expire in 3 days.', false, '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('93605e6b-2bf8-4e31-b173-240bef7a963c', 'Resource updated Check out the new guidelines document.', false, '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('f03b4c28-8e47-4000-8f3a-c6431ea4d0d3', 'Resource updated Check out the new guidelines document.', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('287adfd0-595a-4b74-b020-7c9c482ae8b3', 'New event added Annual Meetup on Dec 15th.', true, 'c12885c4-1e06-41b9-a896-f0479f3aa3f1');
INSERT INTO "Notification" ("id", "message", "isRead", "userId") VALUES ('f44648c1-32eb-4f40-9c95-453529cc1fe8', 'Admin has assigned you a new task Complete the project report.', true, '7917d768-45e8-40c3-ae83-54969fc316af');

INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('de8136b7-b592-4068-874f-84f067db2ce6', '120.00', '2025-07-01T17:56:10.506Z', 'Completed', 'e4e7e295-ab2b-4591-98a3-31c408a0f934');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('4c1d9b3a-451f-4911-bbe2-340c1c2e9fa2', '200.00', '2024-11-09T06:02:16.251Z', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('b88ee763-7997-4de2-817d-585dcdd72ade', '120.00', '2024-01-08T09:15:15.759Z', 'Processing', '7917d768-45e8-40c3-ae83-54969fc316af');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('bd772c3a-830a-4794-b8f0-1d0f51905e8e', '15.25', '2023-12-31T15:26:00.266Z', 'Pending', '07792b33-8115-4694-b481-e97cbaa14b6a');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('aa34b19b-1af8-4a4d-9732-b88c27302652', '120.00', '2025-07-12T13:33:42.662Z', 'Processing', '943c3943-d053-4d3e-bc05-47b58ef3a2e0');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('07bc91d8-8d23-491a-8a2d-3b275c2c9764', '15.25', '2024-03-04T20:35:55.149Z', 'Completed', 'c12885c4-1e06-41b9-a896-f0479f3aa3f1');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('d365b3c1-8375-4eb9-8023-9ae0ee5f2cc4', '120.00', '2025-06-14T21:12:22.361Z', 'Processing', '368ddddc-eeea-44e5-8912-5da77f1709f3');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('4f43e86d-b496-45b9-aeda-2e3570128e27', '75.50', '2024-01-03T20:40:43.880Z', 'Failed', '368ddddc-eeea-44e5-8912-5da77f1709f3');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('9fcd2772-0163-429d-ad92-fb2b59f2d9c1', '75.50', '2024-07-11T12:41:57.746Z', 'Failed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "paymentDate", "status", "userId") VALUES ('d92ec07c-0e40-465a-8082-1743207c05b3', '49.99', '2024-07-23T00:48:55.013Z', 'Processing', '07792b33-8115-4694-b481-e97cbaa14b6a');

INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('ea929ce1-964f-4ed1-a93e-bfebfc8a6825', 'Event Reminder', 'Upcoming Event Reminder', 'You have been assigned a new task. Please check your dashboard.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('70bb75ce-fe2f-43a8-89ca-1c0e888042c0', 'Password Reset', 'Monthly Newsletter', 'Click the link below to reset your password.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('444afddc-9add-4e47-a1e0-054a1b60a595', 'Welcome Email', 'Welcome to Our Platform', 'Click the link below to reset your password.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('734c7a81-4cbb-4866-aa4c-83d0fa02971f', 'Password Reset', 'Upcoming Event Reminder', 'Dont forget about the upcoming event. Here are the details.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('1edad24d-e510-4f9b-bf2e-cd7865f1ad8f', 'Newsletter', 'Reset Your Password', 'Dont forget about the upcoming event. Here are the details.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('e2604dde-86c1-46df-ace0-bb9232b37731', 'Event Reminder', 'Upcoming Event Reminder', 'Hello welcome to our platform. We are excited to have you');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('e3325793-48b8-4792-80e9-63cc8ee16cf6', 'Task Assignment', 'New Task Assigned', 'Hello welcome to our platform. We are excited to have you');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('6d67be56-6a4a-46f8-ac30-3d3560254b73', 'Newsletter', 'Reset Your Password', 'Dont forget about the upcoming event. Here are the details.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('3d4e048c-4c21-4201-b5db-a55c832190f9', 'Task Assignment', 'Welcome to Our Platform', 'Here is our monthly newsletter with the latest updates.');
INSERT INTO "EmailTemplate" ("id", "name", "subject", "body") VALUES ('9cd38f87-e7eb-4205-82a6-627ea6a1475c', 'Newsletter', 'New Task Assigned', 'Here is our monthly newsletter with the latest updates.');

INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('a3d7201d-0155-4538-ae62-3aab5eaf8a93', '2024-07-18T15:40:47.780Z', 'Confirmed', '735c7527-a968-4d0b-a067-3b665aebc695', '07792b33-8115-4694-b481-e97cbaa14b6a');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('d7e48fa2-af7b-4454-ac31-fc50e005b864', '2025-06-28T00:33:11.661Z', 'Completed', '1c36ed12-b0ed-4146-8f78-40d270278ec3', '07792b33-8115-4694-b481-e97cbaa14b6a');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('2a82277b-133b-444b-89f9-885bbe36bde9', '2025-07-07T12:04:10.567Z', 'Cancelled', '580755e3-14c3-402c-a497-42b7d1139ea9', '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('dcd68cd4-a145-42d4-8e34-aefcead8d835', '2023-11-17T08:34:41.764Z', 'Waitlisted', '264b3f51-e7a7-4ef9-90ee-3e2851c05a0f', '943c3943-d053-4d3e-bc05-47b58ef3a2e0');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('0a55e391-72d7-4c9b-a6de-47f3a3a0fcda', '2025-05-14T22:53:59.985Z', 'Waitlisted', '7757fc70-9798-4b5a-bdcb-f09e28530e1b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('33ff1b8a-81a1-4dda-bc23-335071fe9db4', '2025-04-12T14:23:21.783Z', 'Cancelled', '6452e2f6-2fe2-42d5-9e3a-a454b98a7b01', '07792b33-8115-4694-b481-e97cbaa14b6a');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('2a73ac08-a845-4b39-864e-660f45da400c', '2024-05-07T02:47:48.637Z', 'Cancelled', '6452e2f6-2fe2-42d5-9e3a-a454b98a7b01', '026000b4-a986-4c6a-8bf9-1128762d29a5');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('ff0ae6dc-6d1b-4fbd-bf09-c55e18a1aac4', '2025-05-17T22:35:39.858Z', 'Waitlisted', 'e1479a78-b7ac-4a73-8a8b-84aa3bbeb109', 'e4e7e295-ab2b-4591-98a3-31c408a0f934');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('fd45299f-ab96-4781-b64a-2b27b36d71bd', '2025-09-04T07:43:46.599Z', 'Waitlisted', 'bffc7244-42b8-4e08-80a8-02803e21f879', 'e4e7e295-ab2b-4591-98a3-31c408a0f934');
INSERT INTO "EventRegistration" ("id", "registrationDate", "status", "eventId", "userId") VALUES ('fb82ef83-7868-4a9d-a843-2d673aa3b2ba', '2024-01-05T10:55:53.105Z', 'Cancelled', '5a160608-6c90-4c78-a674-0741513c746e', 'c12885c4-1e06-41b9-a896-f0479f3aa3f1');

INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('99efc8e2-ada5-4e9c-8be7-388c4ef59ba2', '2024-05-09T09:31:37.432Z', '2024-02-01T22:07:03.881Z', '026000b4-a986-4c6a-8bf9-1128762d29a5', 'ead4c178-8a7e-4039-bc72-ce207a16ebef');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('76ab0b8e-c0fb-4ebb-8922-819d23fa4cad', '2025-06-29T12:50:38.984Z', '2024-12-10T12:11:33.886Z', '943c3943-d053-4d3e-bc05-47b58ef3a2e0', 'a8354673-4881-497e-9e51-d607431ab016');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('cfd49e01-a4ba-46de-8576-34691dfef908', '2024-05-03T14:29:32.351Z', '2025-08-13T14:10:32.508Z', '626b8537-df55-42e9-8afe-255f6a0f7741', 'c2396393-d279-4180-8b70-a88f25d0fb30');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('d7b1717c-fd60-4f4b-9be0-66e3548a20d8', '2023-12-12T08:47:13.582Z', '2024-07-18T00:24:41.107Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f799e00c-794e-4613-adb6-b12256ca437a');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('40295ce8-8dd4-4be6-ae20-251bc982d115', '2025-05-07T08:29:34.889Z', '2024-09-02T16:06:53.451Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c2396393-d279-4180-8b70-a88f25d0fb30');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('5191d34b-67c4-45ee-b6bf-b27b738dd9ef', '2025-04-28T12:50:21.734Z', '2024-04-10T09:15:49.443Z', '7917d768-45e8-40c3-ae83-54969fc316af', 'ead4c178-8a7e-4039-bc72-ce207a16ebef');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('114177e5-a24f-44ed-af52-f3d0da62cdc8', '2024-08-25T02:11:20.708Z', '2025-03-12T08:42:20.236Z', 'e4e7e295-ab2b-4591-98a3-31c408a0f934', 'ac15c649-0d59-49a3-83c6-6b19f63c2444');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('35c7ffa0-c56d-491f-a6ec-7c88b2b3b24c', '2023-11-19T06:01:49.871Z', '2024-03-29T10:05:52.048Z', 'c12885c4-1e06-41b9-a896-f0479f3aa3f1', 'c2396393-d279-4180-8b70-a88f25d0fb30');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('c2562a76-8018-494d-9d7d-73514f7a9520', '2024-11-14T07:27:26.694Z', '2025-08-30T05:06:34.705Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'ead4c178-8a7e-4039-bc72-ce207a16ebef');
INSERT INTO "UserTask" ("id", "assignedDate", "completedDate", "userId", "taskId") VALUES ('4e4d1baf-6aaf-4b13-b217-9250e1da76f2', '2023-11-07T05:12:38.786Z', '2023-10-17T11:12:57.854Z', 'c12885c4-1e06-41b9-a896-f0479f3aa3f1', 'a57a0ea8-ed90-46d9-aa2f-2bfd07b72009');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })

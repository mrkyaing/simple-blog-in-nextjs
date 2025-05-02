import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const filePath = path.join(process.cwd(), 'data', 'contact.json');
        const newEntry = { name, email, message, date: new Date().toISOString() };

        try {
            const fileData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : [];
            fileData.push(newEntry);
            fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
            res.status(200).json({ message: 'Contact saved successfully.' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to save contact.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
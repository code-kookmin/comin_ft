import fs from 'fs';
import path from 'path';

const sourceFolder = './티어아이콘';
const exportFile = './exported-icons.txt';

const exportIcons = async () => {
    try {
        const icons: string[] = []; // Specify the type of the icons array as an array of strings
        for (let i = 0; i <= 30; i++) {
            const filePath = path.join(sourceFolder, `${i}.svg`);
            const fileContent = await fs.promises.readFile(filePath, 'utf-8');
            icons.push(fileContent);
        }
        await fs.promises.writeFile(exportFile, icons.join('\n'));
        console.log('Icons exported successfully!');
    } catch (error) {
        console.error('Error exporting icons:', error);
    }
};

exportIcons();
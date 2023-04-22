export default function simpleFormat(text) {
  const formattedText = text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line)
    .map((line) => {
      if (line.startsWith('•')) {
        return `<li>${line.slice(1).trim()}</li>`;
      }
      return `<p>${line}</p>`;
    })
    .join('');
  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
}







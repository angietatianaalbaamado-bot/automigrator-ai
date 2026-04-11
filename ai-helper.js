export function suggestFix(code) {
  return `
🤖 AI Analysis:
Some patterns may require manual review.

Suggestions:
- Check provider configurations
- Review complex utils usage
- Ensure compatibility with ethers v6

Code:
${code}
`;
}
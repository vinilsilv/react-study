export default function handler(req, res) {
    const code = req.query.code
    res.status(200).json({
        id: code,
        name: `Mary ${code}`,
        email: `mary${code}@test.com`
    })
}
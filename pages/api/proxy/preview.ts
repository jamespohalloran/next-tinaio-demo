

const preview = (req: any, res: any) => {

  const token = (req.headers['authorization'] || '').split(' ')[1] || null

  const previewData = {
    tinaio_token: token,
  }
  res.setPreviewData(previewData)
}

export default preview
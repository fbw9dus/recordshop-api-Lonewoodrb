
app.get('/api/records', (req, resp)=>{
    resp.send('Das ist die Liste')
})
app.post('/api/records', (req, resp)=>{
    resp.send('Das ist eine andere Liste.')
})
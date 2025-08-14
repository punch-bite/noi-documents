export async function getUser(req, res) {
  const { id } = req.params;
  const user = await db.collection('users').doc(id).get();
  res.json(user.data());
}
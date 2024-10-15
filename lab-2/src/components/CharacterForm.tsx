function CharacterForm({addCharacterHandler}) {
  return (
    <form onSubmit={addCharacterHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="name">Email</label>
      <input type="email" name="name" />
      <button type="submit">Add</button>
    </form>
  )
}

export default CharacterForm
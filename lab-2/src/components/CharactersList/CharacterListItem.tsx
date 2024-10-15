interface CharacterListItemProps {
  name: string;
  email: string;
  avatarUrl: string;
}

function CharacterListItem({name, email, avatarUrl}: CharacterListItemProps) {
  return (
    <div>
      <img src={avatarUrl} alt={name}/>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  )
}

export default CharacterListItem
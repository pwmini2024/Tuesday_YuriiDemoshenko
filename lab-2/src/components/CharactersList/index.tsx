import CharacterListItem from "./CharacterListItem"


interface CharactersListProps {
  peopleData: PeopleData[]
}
interface PeopleData {
  name: string;
  email: string;
  avatarUrl: string;
}

export default function CharactersList({peopleData = []}: CharactersListProps) {
  return (
    <div>
      <p>CharactersList</p>
      {peopleData.map((elem) => {
        return (
          <CharacterListItem name={elem.name} email={elem.email} avatarUrl={elem.avatarUrl}/>
        )
      })}
    </div>
  )
}

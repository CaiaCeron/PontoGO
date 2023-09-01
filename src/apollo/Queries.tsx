import { gql, useQuery } from "@apollo/client";

export const GET_ALL_REGISTERED_TIMES = gql`
  query REGISTERED_TIMES {
    registeredTimes($start: Int!, $limit: Int!) {
      id
      created_at
      timeRegistered
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_USER_REGISTERED_TIMES = gql`
  query REGISTEREDTIME {
    registeredTime(id: 1427) {
      id
      created_at
      timeRegistered
      user {
        id
        username
        created_at
        email
      }
    }
  }
`;

function GetAllRegisteredTimes() {
  const { loading, error, data } = useQuery(GET_ALL_REGISTERED_TIMES);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  const itemsArray = data.items.map((item) => ({
    id: item.id,
    nome: item.nome,
  }));

  // itemsArray agora contém os dados em formato de array.

  return (
    <div>
      {itemsArray.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Nome: {item.nome}</p>
        </div>
      ))}
    </div>
  );
}

export default GetAllRegisteredTimes;

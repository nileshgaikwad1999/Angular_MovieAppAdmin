using API.Model;

namespace API.Iservices
{
    public interface IActorsService
    {
        Task<List<ActorsModel>> Actors();

        Task<ActorsModel> Actor(int id);

        Task Insert(ActorsModel model);

        Task Update(ActorsModel model);

        Task Delete(ActorsModel model);
    }
}

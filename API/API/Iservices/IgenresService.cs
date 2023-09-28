using API.Model;

namespace API.Iservices
{
    public interface IgenresService
    {
        Task<List<genersModel>> geners();

        Task<genersModel> geners(int id);

        Task Insert(genersModel model);

        Task Update(genersModel model);

        Task Delete(genersModel model);
    }
}

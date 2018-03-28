FROM microsoft/aspnetcore:2.0 AS base
RUN apt-get update
RUN wget -qO- https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y build-essential nodejs

WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY ngCoreSolution.sln ./
COPY ./WebAppSimple/ngCore.csproj ./WebAppSimple/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .

RUN dotnet build WebAppSimple  -c Release -o ../app

FROM build AS publish
RUN dotnet publish WebAppSimple  -c Release -o ../app

FROM base AS final
COPY --from=publish . .
ENTRYPOINT ["dotnet", "ngCore.dll"]

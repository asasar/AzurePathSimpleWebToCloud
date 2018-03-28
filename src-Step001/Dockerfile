FROM microsoft/aspnetcore-build AS base
RUN apt-get update
RUN wget -qO- https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y build-essential nodejs

WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build AS build
WORKDIR /src
COPY ngCoreSolution.sln ./
COPY ./WebAppSimple/ngCore.csproj ./WebAppSimple/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .

RUN dotnet build WebAppSimple  -c Release -o ../app

FROM build AS publish
RUN dotnet publish WebAppSimple  -c Release -o ../app

FROM microsoft/aspnetcore-build  as final
WORKDIR /app  
ENV ASPNETCORE_ENVIRONMENT Local  
ENTRYPOINT ["dotnet", "ngCore.dll"]
COPY --from=build ./src/app .

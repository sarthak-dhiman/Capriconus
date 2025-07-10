from pydantic import BaseModel

class GameBase(BaseModel):
    title: str
    description: str
    genre: str
    platform: str

class GameCreate(GameBase):
    pass

class Game(GameBase):
    id: int

    class Config:
        orm_mode = True

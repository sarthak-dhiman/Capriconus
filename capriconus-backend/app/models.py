from sqlalchemy import Column, Integer, String
from .database import Base

class Game(Base):
    __tablename__ = 'games'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    genre = Column(String)
    platform = Column(String)

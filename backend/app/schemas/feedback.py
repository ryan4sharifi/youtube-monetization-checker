from pydantic import BaseModel


class FeedbackCreate(BaseModel):
    channel_handle: str
    rating: str

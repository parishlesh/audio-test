
import speech_recognition as sr
import pydub
from pydub import AudioSegment
from pydub.playback import play 

print("start")
AudioSegment.converter = "C:\\PATH_Programs\\ffmpeg.exe"
# Convert mp3 file to wav

print("start2")
sound = AudioSegment.from_mp3("Test1.mp3")
sound.export("transcript.wav", format="wav")
print("start3")
# Transcribe audio file
AUDIO_FILE = "transcript.wav"

# Use the audio file as the audio source
r = sr.Recognizer()

# Load the audio file
with sr.AudioFile(AUDIO_FILE) as source:
    audio = r.record(source)  # Read the entire audio file

# Transcribe the audio
transcription = r.recognize_google(audio)

# Print the transcription
print("Transcription: " + transcription)

# Save the transcription to a text file
with open("transcript.txt", "w") as text_file:
    text_file.write(transcription)


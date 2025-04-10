"use client"

import { useState, useRef } from "react"
import { X, ImageIcon, FileVideo, BarChart2, MapPin, Calendar, Smile } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface CreateContentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateContentModal({ isOpen, onClose }: CreateContentModalProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mediaFiles, setMediaFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<{ title?: string; body?: string; tags?: string }>({})
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const availableTags = [
    "Entertainment",
    "Sports",
    "Politics",
    "Technology",
    "Health",
    "Business",
    "Science",
    "Education",
    "Environment",
  ]

  const handleAddTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
      if (errors.tags) {
        setErrors({ ...errors, tags: undefined })
      }
    }
  }

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  const handleImageUpload = () => {
    fileInputRef.current?.click()
  }

  const handleVideoUpload = () => {
    videoInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setMediaFiles([...mediaFiles, ...newFiles])
    }
  }

  const removeMedia = (index: number) => {
    const updatedFiles = [...mediaFiles]
    updatedFiles.splice(index, 1)
    setMediaFiles(updatedFiles)
  }

  const validateForm = () => {
    const newErrors: { title?: string; body?: string; tags?: string } = {}
    let isValid = true

    if (!title.trim()) {
      newErrors.title = "Title is required"
      isValid = false
    }

    if (!body.trim()) {
      newErrors.body = "Content is required"
      isValid = false
    }

    if (selectedTags.length === 0) {
      newErrors.tags = "At least one tag is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handlePublish = () => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Content published successfully!")
      resetForm()
      onClose()
    }, 1000)
  }

  const resetForm = () => {
    setTitle("")
    setBody("")
    setSelectedTags([])
    setMediaFiles([])
    setErrors({})
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0 bg-black text-white border-gray-700">
        <div className="flex items-center justify-between p-3 border-b border-gray-800">
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-800">
            <X className="h-5 w-5" />
          </button>
          <div className="text-sm font-medium">Drafts</div>
        </div>

        <div className="p-4">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              {/* Title Field */}
              <div>
                <Input
                  placeholder="Title *"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                    if (e.target.value.trim() && errors.title) {
                      setErrors({ ...errors, title: undefined })
                    }
                  }}
                  className={`border-none bg-transparent text-lg placeholder:text-gray-500 focus-visible:ring-0 p-0 ${errors.title ? "placeholder:text-red-500" : ""
                    }`}
                />
                {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
              </div>

              {/* Body Field */}
              <div>
                <Textarea
                  placeholder="What's happening?"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value)
                    if (e.target.value.trim() && errors.body) {
                      setErrors({ ...errors, body: undefined })
                    }
                  }}
                  className={`border-none bg-transparent text-lg placeholder:text-gray-500 focus-visible:ring-0 p-0 min-h-[120px] resize-none ${errors.body ? "placeholder:text-red-500" : ""
                    }`}
                />
                {errors.body && <p className="text-xs text-red-500 mt-1">{errors.body}</p>}
              </div>

              {/* Tags Field */}
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      className="flex items-center gap-1 bg-blue-900 text-white hover:bg-blue-800 rounded-full px-3"
                    >
                      {tag}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
                    </Badge>
                  ))}
                </div>
                <Select onValueChange={handleAddTag}>
                  <SelectTrigger
                    className={`w-full bg-transparent border border-gray-800 text-white ${errors.tags ? "border-red-500" : ""
                      }`}
                  >
                    <SelectValue placeholder="Select tags *" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border border-gray-800 text-white">
                    {availableTags.map((tag) => (
                      <SelectItem key={tag} value={tag} className="focus:bg-gray-800 focus:text-white">
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tags && <p className="text-xs text-red-500 mt-1">{errors.tags}</p>}
              </div>

              {/* Media Preview */}
              {mediaFiles.length > 0 && (
                <div className="mt-4 border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-2 gap-0.5">
                    {mediaFiles.map((file, index) => (
                      <div key={index} className="relative group aspect-square">
                        {file.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(file) || "/placeholder.svg"}
                            alt={`Uploaded ${index}`}
                            className="h-full w-full object-cover"
                          />
                        ) : file.type.startsWith("video/") ? (
                          <video src={URL.createObjectURL(file)} className="h-full w-full object-cover" controls />
                        ) : (
                          <div className="flex items-center justify-center h-full w-full bg-gray-900 text-white">
                            {file.name}
                          </div>
                        )}
                        <button
                          className="absolute top-2 right-2 bg-black bg-opacity-70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeMedia(index)}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="border-t border-gray-800 pt-3 flex items-center justify-between">
            <div className="flex space-x-1">
              <button
                onClick={handleImageUpload}
                className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full"
              >
                <ImageIcon className="h-5 w-5" />
              </button>
              <button
                onClick={handleVideoUpload}
                className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full"
              >
                <FileVideo className="h-5 w-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full">
                <BarChart2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full">
                <Smile className="h-5 w-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 rounded-full">
                <MapPin className="h-5 w-5" />
              </button>
            </div>

            <Button
              onClick={handlePublish}
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-1 font-bold"
            >
              Post
            </Button>
          </div>
        </div>

        {/* Hidden file inputs */}
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
        <input type="file" ref={videoInputRef} className="hidden" accept="video/*" onChange={handleFileChange} />
      </DialogContent>
    </Dialog>
  )
}
